import React, { Component } from "react";
import PropTypes from "prop-types";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import ZoomIn from "@material-ui/icons/ZoomIn";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

class ImageTiles extends Component {
  state = {
    open: false,
    currentImg: ""
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridListTile>
              <img src={img.largeImageURL} alt="alt" />
              <GridListTileBar
                title={img.tags}
                key={img.id}
                subtitle={
                  <span>
                    by<strong>{img.user}</strong>
                  </span>
                }
                actionIcon={
                  <IconButton
                    onClick={() => this.handleOpen(img.largeImageURL)}
                  >
                    {console.log(this.state)}
                    <ZoomIn color="secondary" />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    // const actions = [
    //   <IconButton label="Close" primary={true} onClick={this.handleClose} />
    // ];

    return (
      <div>
        {imageListContent}
        <Dialog open={this.state.open}>
          <img src={this.state.currentImg} alt="" style={{ width: "100%" }} />
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ImageTiles.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageTiles;
