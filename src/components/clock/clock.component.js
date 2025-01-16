class Clock extends Component {
  refs = {
    clock: ".clock-time",
    icon: ".clock-icon",
  };

  constructor() {
    super();
    console.log("CONFIG in Clock constructor:", CONFIG);  // Log CONFIG here to check if timeZone is present
    this.timeZone = CONFIG.timeZone || "UTC"; // Default to UTC if CONFIG.timeZone is not set
    console.log("Time zone from CONFIG:", this.timeZone);  // Log the time zone specifically
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
    this.refs.clock = strftime(date, CONFIG.clock.format, this.timeZone); // Use the standalone strftime function
  }
  

  connectedCallback() {
    this.render().then(() => {
      this.setTime();
      this.setIconColor();

      setInterval(() => this.setTime(), 1000); // Update time every second
    });
  }
}
