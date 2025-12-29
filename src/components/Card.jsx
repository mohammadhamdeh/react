import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mx: "auto",
        mt: 4,
        borderRadius: 3,
        boxShadow: 4,
      }}
    >
      <CardMedia
        sx={{
          height: 160,
        }}
        image="https://images.unsplash.com/photo-1552728089-57bdde30beb3"
        title="green iguana"
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 600 }}
        >
          Lizard
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
