/* import React from "react";
import "./footer.css"; // Assuming you create a separate CSS file

const Footer = () => {
  return (
    <footer className="footerContainer">
      <h1 className="titleFooter">Algorithm Visualizer</h1>
      <div className="footerSectionContainer">
        {/* Links Section 1 }
        {/* <div className="section1">
          <a href="/aboutus">About Us</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/courses">Courses</a>
          <a href="/product">Product</a>
          <a href="/press">Press</a>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.linkedin.com">LinkedIn</a>
          <a href="https://www.instagram.com">Instagram</a>
          <a href="https://www.youtube.com">YouTube</a>
        </div>
        <div className="social-icons">
          <small>
            &copy; {new Date().getFullYear()} Algorithm Visualizer. All rights
            reserved.
          </small>
        </div>
      </div>
      {/* <div className="footerSection2Container">
        <div className="section2">
          <a href="/product">Product</a>
          <a href="/courses">Courses</a>
          <a href="/today">Today</a>
          <a href="/pricing">Pricing</a>
          <a href="/testimonials">Testimonials</a>
        </div>
      </div> }
      
    /* </footer>
  );
};

export default Footer; */
 /* */ 
 import React from "react";
import { Typography, Grid, Link, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000000", // Black background
        color: "#ffffff", // White text color for contrast
        padding: "40px 0",
        width: "100%",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontFamily: "Teko" }}>
          Algorithm Visualizer
        </Typography>
        <Divider style={{ margin: "20px 0", backgroundColor: "#ffffff" }} />

        <Grid container spacing={4} justifyContent="center">
          {/* Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link
              href="/aboutus"
              color="inherit"
              underline="hover"
              sx={{ ":hover": { color: "#ffab00" } }}
              display="block"
            >
              About Us
            </Link>
            <Link
              href="/testimonials"
              color="inherit"
              underline="hover"
              sx={{ ":hover": { color: "#ffab00" } }}
              display="block"
            >
              Testimonials
            </Link>
            <Link
              href="/pricing"
              color="inherit"
              underline="hover"
              sx={{ ":hover": { color: "#ffab00" } }}
              display="block"
            >
              Pricing
            </Link>
            <Link
              href="/product"
              color="inherit"
              underline="hover"
              sx={{ ":hover": { color: "#ffab00" } }}
              display="block"
            >
              Product
            </Link>
            <Link
              href="/principles"
              color="inherit"
              underline="hover"
              sx={{ ":hover": { color: "#ffab00" } }}
              display="block"
            >
              Principles
            </Link>
          </Grid>

          {/* Social Icons */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px", // Increased gap between icons
              }}
            >
              <IconButton
                component="a"
                href="https://www.facebook.com"
                aria-label="Facebook"
                sx={{
                  color: "#ffffff",
                  "&:hover": { color: "#3b5998" },
                }}
              >
                <FacebookIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                sx={{
                  color: "#ffffff",
                  "&:hover": { color: "#0077b5" },
                }}
              >
                <LinkedInIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com"
                aria-label="Instagram"
                sx={{
                  color: "#ffffff",
                  "&:hover": { color: "#e4405f" },
                }}
              >
                <InstagramIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.youtube.com"
                aria-label="YouTube"
                sx={{
                  color: "#ffffff",
                  "&:hover": { color: "#ff0000" },
                }}
              >
                <YouTubeIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </div>
          </Grid>
        </Grid>

        <Divider style={{ margin: "20px 0", backgroundColor: "#ffffff" }} />

        <Grid container spacing={3} justifyContent="center">
          {/* Legal Links */}
          <Grid item xs={12}>
            <Typography variant="body2">
              <Link
                href="/privacy-policy"
                color="inherit"
                underline="hover"
                sx={{ ":hover": { color: "#ffab00" } }}
              >
                Privacy Policy
              </Link>{" "}
              |
              <Link
                href="/terms-of-service"
                color="inherit"
                underline="hover"
                sx={{ ":hover": { color: "#ffab00" } }}
              >
                {" "}
                Terms of Service
              </Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} Algorithm Visualizer. All rights
              reserved.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;

















