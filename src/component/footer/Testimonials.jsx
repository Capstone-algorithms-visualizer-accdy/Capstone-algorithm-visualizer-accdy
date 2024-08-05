import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Paper, Grid, Avatar, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { testimonials } from "./testimonials";

// Functional component to render a star rating
const StarRating = ({ rating }) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
    {/* Generate an array with 5 elements to represent the 5-star rating */}
    {Array(5)
      .fill() // Fill the array with undefined values
      .map((_, index) =>
        index < rating ? (
          // Render a filled star if the index is less than the rating
          <StarIcon key={index} sx={{ color: "primary.main", fontSize: 16 }} />
        ) : (
          // Render an empty star if the index is greater than or equal to the rating
          <StarBorderIcon
            key={index}
            sx={{ color: "primary.main", fontSize: 16 }}
          />
        )
      )}
  </Box>
);

const Testimonials = () => {
  const navigate = useNavigate();

  // Callback to handle navigation
  const navigateHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          cursor: "pointer",
          mb: 4,
          color: "primary.main",
          fontWeight: "bold",
          transition: "color 0.3s",
          "&:hover": {
            color: "primary.dark",
          },
        }}
        onClick={navigateHome}
      >
        Testimonials
      </Typography>
      <Grid container spacing={2}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: 1,
                backgroundColor: "#fff",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s",
                height: 100,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      color: "#fff",
                      fontWeight: "bold",
                      width: 32,
                      height: 32,
                      fontSize: "2rem",
                    }}
                  >
                    {testimonial.user.charAt(0)}
                  </Avatar>
                </Grid>
                <Grid item xs>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: "bold", fontSize: "1rem" }}
                  >
                    {testimonial.user}
                  </Typography>
                  <StarRating rating={testimonial.rating} />
                </Grid>
              </Grid>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1, fontSize: "1rem" }}
              >
                {testimonial.comment}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
