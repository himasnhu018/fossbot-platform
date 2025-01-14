import React from 'react';
import { Dialog, DialogTitle, DialogContent, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';

interface CardDialogProps {
  open: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
}

const CardDialog: React.FC<CardDialogProps> = ({ open, onClose, onSelect }) => {
  const handleSelect = (url: string) => {
    onSelect(url);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>Select a stage</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140" 
                image="/js-simulator/stages/white_tiles.png"
                alt="White tiles"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  White Tiles
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Good stage to start using the robot, especially the commands that make the robot move in default steps.
                </Typography>
              </CardContent>
              <CardActions style={{ marginTop: 'auto' }}>
                <Button size="small" color="primary" onClick={() => handleSelect('/js-simulator/stages/stage_white_rect.json')}>
                  Select
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image="/js-simulator/stages/stage_object.png"
                alt="Objects on the floor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Objects on the floor
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This stage can be used for obstacle avoidance and object detection exercises.
                </Typography>
              </CardContent>
              <CardActions style={{ marginTop: 'auto' }}>
                <Button size="small" color="primary" onClick={() => handleSelect('/js-simulator/stages/stage_object.json')}>
                  Select
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image="/js-simulator/stages/stage_maze.png"
                alt="Maze"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Maze
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A simple maze, good for navigation exercises.
                </Typography>
              </CardContent>
              <CardActions style={{ marginTop: 'auto' }}>
                <Button size="small" color="primary" onClick={() => handleSelect('/js-simulator/stages/stage_maze.json')}>
                  Select
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image="/js-simulator/stages/stage_colors.png"
                alt="Colors on the floor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Colors on the floor
                </Typography>
                <Typography variant="body2" color="text.secondary">
                An exercise to help kids learn the colors.
                </Typography>
              </CardContent>
              <CardActions style={{ marginTop: 'auto' }}>
                <Button size="small" color="primary" onClick={() => handleSelect('/js-simulator/stages/stage_numbers.json')}>
                  Select
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image="/js-simulator/stages/stage_eiffel.png"
                alt="Colors on the floor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The Eiffel tower
                </Typography>
                <Typography variant="body2" color="text.secondary">
                An example of using 3D models within the simulator.
                </Typography>
              </CardContent>
              <CardActions style={{ marginTop: 'auto' }}>
                <Button size="small" color="primary" onClick={() => handleSelect('/js-simulator/stages/stage_eiffel.json')}>
                  Select
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image="/js-simulator/stages/stage_animals.png"
                alt="Colors on the floor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The farm
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Let's learn about the animals.
                </Typography>
              </CardContent>
              <CardActions style={{ marginTop: 'auto' }}>
                <Button size="small" color="primary" onClick={() => handleSelect('/js-simulator/stages/stage_animals.json')}>
                  Select
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image="/js-simulator/stages/stage_white_paper.png"
                alt="Colors on the floor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  White paper
                </Typography>
                <Typography variant="body2" color="text.secondary">
                A stage with a white floor, perfect for drawing.
                </Typography>
              </CardContent>
              <CardActions style={{ marginTop: 'auto' }}>
                <Button size="small" color="primary" onClick={() => handleSelect('/js-simulator/stages/stage_white_paper.json')}>
                  Select
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CardDialog;
