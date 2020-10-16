import React from 'react'


class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{height: '100vh', backgroundColor: 'yellow'}} onMouseMove={this.handleMouseMove}>
  
            {/* No lugar de fornecer uma representação estática do que <Mouse> deve
                renderizar, use a `render` prop para determinar o que renderizar
                dinamicamente.*/}
            {this.props.render(this.state)}
        </div>
      );
    }
  }
  
class MouseTracker extends React.Component {
    constructor(props){
        super(props)
        this.renderChildComponent = this.renderChildComponent.bind(this)
    }


    renderChildComponent(mousePositions){
        return (
            <p>Esta é uma renderização feita através do conceito 'render prop'. Posição atual do mouse - X: {mousePositions.x}; Y: {mousePositions.y}</p>
        )
    }


    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => this.renderChildComponent(mouse)} />
            </div>
        );
    }
}


export default MouseTracker