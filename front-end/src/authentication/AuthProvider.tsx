import React, { useContext, createContext, useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LoginData,
    RegisterData,
    NewProjectData,
    AuthContextType,
    Project,
    UserData,
    User,
    PassswordData,
    RoleData,
    BetaTesterData,
    ActivatedData,
} from './AuthInterfaces';
import {
    createProject,
    deleteProjectById,
    getProjectById,
    getProjects,
    login,
    register,
    updateProjectById,
    getUserData,
    updateUserData,
    updateUserPasswordData,
    getUsers,
    deleteUserById,
    updateUserRoleById,
    updateUserBetaTesterStatusById,
    updateUserActivatedStatusById
} from './AuthApi';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const localStorageName = 'fossbot-platform';
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string>(localStorage.getItem(localStorageName) || '');
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            localStorage.setItem(localStorageName, token);
        } else {
            localStorage.removeItem(localStorageName);
        }
    }, [token]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getUserData(token);
                const userData: User = await response.json(); // Extract the user data from the response
                setUser(userData); // Set the user data in the state
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (token) {
            fetchUserData();
        }
    }, [token]);

    const loginAction = async (data: LoginData) => {
        try {
            const response = await login(data);
            const res = await response.json();

            console.log(res)
            if (res.access_token) {
                setUser(res.user);
                setToken(res.access_token);
                localStorage.setItem(localStorageName, res.access_token);
                navigate('/dashboard');
                return { success: true, detail: '' };
            }
            return { success: false, detail: res.detail || 'Login failed' };
        } catch (err) {
            console.error(err);
            return { success: false, detail: err || 'Login failed' };

        }
    };

    const logOutAction = () => {
        setUser(null);
        setToken('');
        localStorage.removeItem(localStorageName);
        navigate('/');
    };

    const registerAction = async (data: RegisterData) => {
        try {
            const response = await register(data);
            const res = await response.json();

            if (response.status === 200) {
                navigate('/auth/login');
            } else {
                throw new Error(res.message || 'Registration failed');
            }
        } catch (err) {
            console.error(err);
        }
    };

    const getAllUsers = async (): Promise<User[] | undefined> => {
        try {
            const response = await getUsers(token);

            if (response.status == 200) {
                const users: User[] = await response.json();

                return users;
            } else {
                throw new Error('Failed to fetch users');
            }
        } catch (err) {
            console.error(err);
            return undefined; // Return undefined in case of an error
        }
    };

    const createProjectAction = async (data: NewProjectData): Promise<number | undefined> => {
        try {
            const response = await createProject(data, token);
            const res = await response.json();

            if (response.status === 200 && res.id) {
                return res.id;
            } else {
                throw new Error(res.message || 'New project failed');
            }
        } catch (err) {
            console.error(err);
        }
    };

    const getProjectsAction = async (): Promise<Project[] | undefined> => {
        try {
            const response = await getProjects(token);

            if (response.status === 200) {
                const projects: Project[] = await response.json();
                return projects;
            } else {
                throw new Error('Failed to fetch projects');
            }
        } catch (err) {
            console.error(err);
            return undefined;
        }
    };

    const deleteProjectByIdAction = async (projectId: number) => {
        try {
            const response = await deleteProjectById(projectId, token);

            if (response.status === 200) {
                await response.json();
                return true;
            } else {
                throw new Error(`Failed to delete project. Status: ${response.status}`);
            }
        } catch (err) {
            console.error(err);
            return false;
        }
    };

    const getProjectByIdAction = async (projectId: number): Promise<Project | undefined> => {
        try {
            const response = await getProjectById(projectId, token);

            if (response.status === 200) {
                const project: Project = await response.json();
                return project;
            } else {
                throw new Error('Failed to fetch project');
            }
        } catch (err) {
            console.error(err);
            return undefined;
        }
    };

    const updateProjectByIdAction = async (projectId: number, data: NewProjectData) => {
        try {
            const response = await updateProjectById(data, projectId, token);


            if (response.status == 200) {
                const project: Project = await response.json();
                return project;

            } else {
                throw new Error('Update project failed');
            }
        } catch (err) {
            console.error(err);
        }
    };

    const getUserDataAction = async () => {
        try {
            const response = await getUserData(token);
            const userData = await response.json();

            if (response.status === 200) {
                return userData;
            } else {
                throw new Error('Failed to fetch user data');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    };

    const updateUser = async (data: UserData): Promise<User | undefined> => {
        try {
            const response = await updateUserData(data, token);

            if (response.status === 200) {
                const user: User = await response.json();
                return user;
            } else {
                throw new Error('User data update failed');
            }
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };

    const updateUserRole = async (userId: number, data: RoleData): Promise<User | undefined> => {
        try {
            const response = await updateUserRoleById(userId, data, token);

            if (response.status == 200) {
                const user: User = await response.json();
                return user;
            } else {
                throw new Error('User role data update failed');
            }
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };

    const updateUserPassword = async (data: PassswordData): Promise<User | undefined> => {
        try {
            const response = await updateUserPasswordData(data, token);

            if (response.status === 200) {
                const user: User = await response.json();
                return user;
            } else {
                throw new Error('User password data update failed');
            }
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };

    const deleteUserByIdAction = async (projectId: number) => {
        try {
            const response = await deleteUserById(projectId, token);

            if (response.status == 200) {
                await response.json();
                return true; // Indicating success
            } else {
                throw new Error(`Failed to delete user. Status: ${response.status}`);
            }
        } catch (err) {
            console.error(err);
            return false; // Indicating failure
        }
    };

    const updateUserBetaTesterStatus = async (userId: number, data: BetaTesterData) => {
        try {
            const response = await updateUserBetaTesterStatusById(userId, data, token);

            if (response.status == 200) {
                await response.json();
                return true; // Indicating success
            } else {
                throw new Error(`Failed to update user. Status: ${response.status}`);
            }
        } catch (err) {
            console.error(err);
            return false; // Indicating failure
        }
    };

    const updateUserActivatedStatus = async (userId: number, data: ActivatedData) => {
        try {
            const response = await updateUserActivatedStatusById(userId, data, token);

            if (response.status == 200) {
                await response.json();
                return true; // Indicating success
            } else {
                throw new Error(`Failed to update user. Status: ${response.status}`);
            }
        } catch (err) {
            console.error(err);
            return false; // Indicating failure
        }
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                loginAction,
                registerAction,
                createProjectAction,
                getProjectsAction,
                deleteProjectByIdAction,
                getProjectByIdAction,
                updateProjectByIdAction,
                logOutAction,
                getUserDataAction,
                updateUser,
                updateUserPassword,
                getAllUsers,
                deleteUserByIdAction,
                updateUserBetaTesterStatus,
                updateUserRole,
                updateUserActivatedStatus
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
