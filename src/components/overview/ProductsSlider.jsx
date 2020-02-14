<Slider
  settings={this.state.settings}
  afterChange={(index) => this.setState({ current: index })}
  arrows={true}
>
  {this.state.photos.map((photo, index) => {
    return <img key={index} src={photo.url} />;
  })}
</Slider>;
