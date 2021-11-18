import React, {Component} from 'react'
import Particles from 'react-tsparticles';
import particlesConfig from '../../../config/ParticleConfig';

class LogoBackground extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {}

  render() {
    return (
        <Particles
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={particlesConfig}
        />
    );
  }
}

export default LogoBackground;
