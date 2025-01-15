import React from 'react';
import { Grid, Container, Typography, Box, Card, CardContent, CardMedia, Button, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';

// Campaign Card Component
const CampaignCard = ({ campaign }) => {
    const progress = (campaign.hired / campaign.totalSlots) * 100;

    return (
        <Card
            sx={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 8px 15px rgba(0,0,0,0.2)',
                },
                backgroundColor: '#ffffff',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            {/* Product Image */}
            <CardMedia
                component="img"
                alt={campaign.brandName}
                height="200"
                image={campaign.image}
                sx={{
                    objectFit: 'cover',
                    borderRadius: '15px 15px 0 0',
                    width: '100%',
                }}
            />

            <CardContent sx={{ paddingTop: '16px', paddingBottom: '16px' }}>
                {/* Brand Name */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2', textAlign: 'center', marginBottom: '10px' }}>
                    {campaign.brandName}
                </Typography>

                {/* Payout Details */}
                <Typography variant="body2" sx={{ color: '#555', marginBottom: '16px', textAlign: 'center' }}>
                    {campaign.payoutDetails}
                </Typography>

                {/* Progress Bar */}
                <Box sx={{ width: '100%', marginBottom: '16px' }}>
                    <Typography variant="body2" sx={{ color: '#888', marginBottom: '5px', textAlign: 'center' }}>
                        Hiring Progress: {campaign.hired} / {campaign.totalSlots}
                    </Typography>
                    <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{
                            height: '8px',
                            borderRadius: '5px',
                            backgroundColor: '#e0e0e0',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#1976d2',
                            },
                        }}
                    />
                </Box>

                {/* Apply Now Button */}
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        width: '100%',
                        borderRadius: '5px',
                        padding: '12px',
                        fontSize: '16px',
                        '&:hover': {
                            backgroundColor: '#1565c0',
                        },
                    }}
                >
                    Apply Now
                </Button>
            </CardContent>
        </Card>
    );
};

// Styled Section Header
const SectionHeader = styled(Typography)(({ theme }) => ({
    marginBottom: '30px',
    fontWeight: 'bold',
    color: '#ff4081', // Vibrant pink color for header
    textAlign: 'center',
    fontSize: '2.5rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
}));

// HomePage Component
const HomePage = () => {
    const campaigns = [
        {
            brandName: 'Brand A',
            payoutDetails: 'Fixed Pay: $100',
            hired: 5,
            totalSlots: 10,
            image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Real Image URL
        },
        {
            brandName: 'Brand B',
            payoutDetails: 'Barter: Free Product',
            hired: 3,
            totalSlots: 6,
            image: "https://images.unsplash.com/photo-1493200754321-b1d3cbc969a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWN8ZW58MHx8MHx8fDA%3D",
        },
        {
            brandName: 'Brand C',
            payoutDetails: 'Refund: 20% Cashback',
            hired: 7,
            totalSlots: 10,
            image: 'https://media.istockphoto.com/id/910373876/photo/professional-dslr-camera.jpg?s=612x612&w=0&k=20&c=Ax9RZS6zlWHQczrbXeEymuPGMMwe7xIri9-Bf8rKpjk=', // Real Image URL
        },
        {
            brandName: 'Brand D',
            payoutDetails: 'Fixed Pay: $200',
            hired: 2,
            totalSlots: 4,
            image: 'https://media.istockphoto.com/id/1475966680/photo/female-hand-wearing-smart-watch-with-blank-screen-on-pink-background.jpg?s=612x612&w=0&k=20&c=5NjKE-nabm7c8_pr09cKS2eiCWk8o4KoKDRhPZYR13U=', // Real Image URL
        },
        {
            brandName: 'Brand E',
            payoutDetails: 'Barter: Free Services',
            hired: 4,
            totalSlots: 8,
            image: 'https://media.istockphoto.com/id/1204155624/photo/laptop-computer-and-digital-tablet-on-table.jpg?s=612x612&w=0&k=20&c=-ECkx0keEQtA61fsvVMhhEZHnDIYN5fkB2lJXD9NVvI=', // Real Image URL
        },
        {
            brandName: 'Brand F',
            payoutDetails: 'Fixed Pay: $150',
            hired: 1,
            totalSlots: 5,
            image: 'https://media.istockphoto.com/id/2055697502/photo/home-office-studio-equipment.jpg?s=612x612&w=0&k=20&c=DuwUq6MDyh5ys2BcaHxRmTFY7L32lQUqHH0R8Hi1ATQ=', // Real Image URL
        },
        {
            brandName: 'Brand G',
            payoutDetails: 'Barter: Free Product',
            hired: 6,
            totalSlots: 8,
            image: 'https://images.unsplash.com/photo-1506610654-064fbba4780c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGNhcnxlbnwwfHwwfHx8MA%3D%3D', // Real Image URL
        },
        {
            brandName: 'Brand H',
            payoutDetails: 'Refund: 15% Cashback',
            hired: 3,
            totalSlots: 5,
            image: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D', // Real Image URL
        },
        {
            brandName: 'Brand I',
            payoutDetails: 'Fixed Pay: $180',
            hired: 8,
            totalSlots: 10,
            image: 'https://images.unsplash.com/photo-1533127321739-d5dc53c221c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHxjYXJ8ZW58MHx8MHx8fDA%3D', // Real Image URL
        },
        {
            brandName: 'Brand J',
            payoutDetails: 'Barter: Free Service',
            hired: 4,
            totalSlots: 7,
            image: 'https://images.unsplash.com/photo-1594490165401-7c83be9f6b51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHNwb3J0JTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D', // Real Image URL
        },
        {
            brandName: 'Brand K',
            payoutDetails: 'Refund: 10% Cashback',
            hired: 5,
            totalSlots: 10,
            image: 'https://images.unsplash.com/photo-1693522108924-58b38d8f0a00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHNwb3J0JTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D', // Real Image URL
        },
        {
            brandName: 'Brand L',
            payoutDetails: 'Fixed Pay: $300',
            hired: 3,
            totalSlots: 6,
            image: 'https://images.unsplash.com/photo-1720905586225-ce1454ba7fca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHNwb3J0JTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D', // Real Image URL
        },
        {
            brandName: 'Brand M',
            payoutDetails: 'Barter: Free Product + Service',
            hired: 2,
            totalSlots: 5,
            image: 'https://images.unsplash.com/photo-1643111441058-24775743af1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1bGxldCUyMGJpa2V8ZW58MHx8MHx8fDA%3D', // Real Image URL
        },
        {
            brandName: 'Brand N',
            payoutDetails: 'Refund: 25% Cashback',
            hired: 9,
            totalSlots: 10,
            image: 'https://images.unsplash.com/photo-1619671391704-b12cf9b5f1aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1bGxldCUyMGJpa2V8ZW58MHx8MHx8fDA%3D', // Real Image URL
        },
        {
            brandName: 'Brand O',
            payoutDetails: 'Fixed Pay: $250',
            hired: 4,
            totalSlots: 6,
            image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1bGxldCUyMGJpa2V8ZW58MHx8MHx8fDA%3D', // Real Image URL
        },
    ];

    return (
        <Container sx={{ paddingTop: '50px', paddingBottom: '50px' }}>
            <SectionHeader variant="h5">Explore Influencer Campaigns</SectionHeader>
            <Grid container spacing={4}>
                {campaigns.map((campaign, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CampaignCard campaign={campaign} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HomePage;
