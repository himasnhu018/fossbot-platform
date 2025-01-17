import React, { useState } from 'react';
import CustomFormLabel from '../forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from '../forms/theme-elements/CustomOutlinedInput';
import ChangePassword from 'src/components/account-settings-page/ChangePassword';
import { Grid, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAuth } from "src/authentication/AuthProvider";

interface AccountSettingsFormType {
  user?: any,
  onFormSubmit: (success: boolean) => void;
}

const AccountSettingsForm = ({ user, onFormSubmit }: AccountSettingsFormType) => {
  const { t } = useTranslation();
  const auth = useAuth();

  const [showChangePasswordSnackbar, setShowChangePasswordSnackbar] = useState(false);

  const [formData, setFormData] = useState({
    firstname: user?.firstname,
    lastname: user?.lastname,
    username: user?.username,
    email: user?.email
  });

  const handleFormSubmit = async () => {
    const user = await auth.updateUser(formData);
    if (user) {
      if (onFormSubmit) onFormSubmit(true); // Notify parent component about the success
    } else {
      if (onFormSubmit) onFormSubmit(false); // Notify parent component about the failure
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showChangeYourPassswordSnackbar = () => {
    setShowChangePasswordSnackbar(true);
  }

  const handlePasswordUpdate = (success) => {
    setShowChangePasswordSnackbar(false);
    if (success) {
      onFormSubmit(true); // Notify parent component about the success
    } else {
      onFormSubmit(false); // Notify parent component about the failure
    }
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bi-firstname" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            {t('firstname')}
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            id="bi-firstname"
            name="firstname"
            placeholder="John"
            fullWidth
            value={formData.firstname}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bi-lastname" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            {t('lastname')}
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            id="bi-lastname"
            name="lastname"
            placeholder="Deo"
            fullWidth
            value={formData.lastname}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bi-username" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            {t('username')}
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            id="bi-username"
            name="username"
            placeholder="john.deo"
            fullWidth
            value={formData.username}
            disabled={true}
          />
        </Grid>
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bi-email" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            {t('password')}
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Button variant="contained" color="primary" onClick={showChangeYourPassswordSnackbar}>
            {t('changeYourPassword')}
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel htmlFor="bi-emailAddress" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
            {t('emailAddress')}
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            id="bi-email"
            placeholder="email@example.com"
            fullWidth
            value={formData.email}
            name="email"
            disabled={true}
          />
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={9} mt={5} mb={3}>
          <Button variant="contained" color="primary" onClick={handleFormSubmit}>
            {t('update')}
          </Button>
        </Grid>
      </Grid>

      {showChangePasswordSnackbar && (
        <ChangePassword
          isOpen={showChangePasswordSnackbar}
          onClose={() => setShowChangePasswordSnackbar(false)}
          onPasswordUpdate={handlePasswordUpdate} />
      )}
    </div>
  );
};

export default AccountSettingsForm;
