class Config {
  defaults = {
    overrideStorage: false,
    temperature: {
      location: "Sucre, Bolivia",
      scale: "C",
    },
    clock: {
      format: "h:i p",
    },
    timeZone: "America/Los_Angeles",
    disabled: [],
    openLastVisitedTab: false,
    tabs: [],
  };

  config;

  constructor(config, palette) {
    this.config = config;
    this.palette = palette;
    this.storage = new Storage("config");

    this.autoConfig();
    this.setKeybindings();
    this.save();

    this.proxy = new Proxy(this, {
      set: (target, prop, value) => this.settingUpdatedCallback(target, prop, value),
    });
    
  }

  /**
   * Automatically save whenever a config property is updated.
   * @returns {void}
   */
  settingUpdatedCallback(target, prop, val) {
    if (!(prop in target)) return false;

    Reflect.set(target, prop, val);
    Object.assign(this, target);

    this.save();

    return true;
  }

  /**
   * Set default config values or load them from the local storage.
   * @returns {void}
   */
  autoConfig() {
    Object.keys(this.defaults).forEach((setting) => {
      if (this.canOverrideStorage(setting)) this[setting] = this.config[setting];
      else if (this.storage.hasValue(setting)) this[setting] = this.storage.get(setting);
      else this[setting] = this.defaults[setting];
    });
  }

  /**
   * Determines whether the localStorage can be overridden.
   * If the setting is for the tabs section, always override.
   * @returns {bool}
   */
  canOverrideStorage(setting) {
    return setting in this.config && (this.config.overrideStorage || setting === "tabs");
  }

  /**
   * Deserialize the configuration object.
   * @returns {Object}
   */
  toJSON() {
    return {
      ...this,
      defaults: undefined,
    };
  }

  /**
   * Trigger keybinding actions.
   * @returns {void}
   */
  setKeybindings() {
    document.onkeydown = ({ key }) => {
      if (document.activeElement !== document.body) return;

      if (Object.keys(this.config.keybindings).includes(key)) Actions.activate(this.config.keybindings[key]);
    };
  }

  save() {
    this.storage.save(stringify(this));
  }
}
