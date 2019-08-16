import React, { Component } from "react";
import PropTypes from "prop-types";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import ZoomIn from "@material-ui/icons/ZoomIn";
import GridListTileBar from "@material-ui/core/GridListTileBar";
// import Dialog from "@material-ui/core/Dialog";
// import Icon from "@material-ui/core/Icon";

// import FlatButton from "material-ui/FlatButton";

class ImageTiles extends Component {
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
                  <IconButton>
                    <ZoomIn color="white" />
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
    return <div>{imageListContent}</div>;
  }
}

ImageTiles.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageTiles;
