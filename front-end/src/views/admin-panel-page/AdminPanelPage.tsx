import React, { useState, useEffect } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import Footer from 'src/components/landingpage/footer/Footer';
import {
    Grid,
    Box,
    Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SuccessAlert from 'src/components/alerts/SuccessAlert';
import ErrorAlert from 'src/components/alerts/ErrorAlert';
import UsersCard from 'src/components/admin-panel/UsersCard';

const AdminPanelPage = () => {
    const { t } = useTranslation();

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const [showSuccessAlertText, setShowSuccessAlertText] = useState("");
    const [showErrorAlertText, setShowErrorAlertText] = useState("");

    return (

        <PageContainer title={t('admin-panel.title')} description={t('admin-panel.description')}>

            <Box sx={{ mt: 4, mb: 4, mr: 2, ml: 2 }}>
                <Typography variant="h5">{t('admin-panel.title')}</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    {t('admin-panel.usageDescription')}
                </Typography>
            </Box>

            <Box sx={{ mt: 4, mb: 4, mr: 2, ml: 2 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <UsersCard />
                    </Grid>
                </Grid>
            </Box>

            <Footer />

            {showSuccessAlert && (
                <SuccessAlert title={showSuccessAlertText} description={""} />
            )}

            {showErrorAlert && (
                <ErrorAlert title={showErrorAlertText} description={""} />
            )}
        </PageContainer>
    );
};


export default AdminPanelPage;