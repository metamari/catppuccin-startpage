class Clock extends Component {
  refs = {
    clock: ".clock-time",
    icon: ".clock-icon",
  };

  constructor() {
    super();
    // Add a default time zone property
    this.timeZone = CONFIG.timeZone || "UTC"; // Use UTC if no timeZone is set in the config
  }

  imports() {
    return [this.resources.icons.material, this.resources.fonts.roboto];
  }

  style() {
    return `
      .clock-time {
        white-space: nowrap;
        font: 300 9pt 'Roboto', sans-serif;
        color: ${CONFIG.palette.text};
        letter-spacing: .5px;
      }

      .clock-icon {
        font-size: 10pt;
        margin-right: 10px;
      }
    `;
  }

  template() {
    return `
      <span class="material-icons clock-icon">schedule</span>
      <p class="clock-time"></p>
    `;
  }

  setIconColor() {
    this.refs.icon.style.color = CONFIG.palette.maroon;
  }

  setTime() {
    const date = new Date();
    // Pass the timeZone to strftime to format according to the selected time zone
    this.refs.clock = date.strftime(CONFIG.clock.format, this.timeZone);
  }

  connectedCallback() {
    this.render().then(() => {
      this.setTime();
      this.setIconColor();

      setInterval(() => this.setTime(), 1000);
    });
  }
}
