import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Paper, Grid, Avatar, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Testimonials = () => {
  // Dummy data for testimonials
  const testimonials = [
    { id: 1, user: "Gohan", rating: 4, comment: "Great service!" },
    { id: 2, user: "Trunks", rating: 5, comment: "Excellent experience!" },
    { id: 3, user: "Vegeta", rating: 4, comment: "Good product!" },
    { id: 4, user: "Goku", rating: 5, comment: "Amazing!" },
    { id: 5, user: "Bulma", rating: 5, comment: "WOW 😲!" },

  ];

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  const getStars = (rating) => {
    return Array(5)
      .fill()
      .map((_, index) => (index < rating ? <StarIcon key={index} color="primary" /> : <StarBorderIcon key={index} color="primary" />));
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ cursor: "pointer", mb: 4, color: "primary.main", fontWeight: "bold" }}
        onClick={navigateHome}
      >
        Testimonials
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <Paper elevation={6} sx={{ p: 4, borderRadius: 2, backgroundColor: "#f5f5f5", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar sx={{ bgcolor: "primary.main", color: "#fff", fontWeight: "bold", width: 56, height: 56 }}>
                    {testimonial.user.charAt(0)}
                  </Avatar>
                </Grid>
                <Grid item xs>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                    {testimonial.user}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    {getStars(testimonial.rating)}
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    {testimonial.comment}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
