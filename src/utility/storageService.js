class StorageService {
  static set(propName, value) {
    localStorage.setItem(propName, value);
  }
  static get(name) {
    localStorage.getItem(name);
  }

  static remove(name) {
    localStorage.removeItem(name);
  }

  static has(name) {
    return localStorage.hasOwnProperty(name);
  }
}

export default StorageService;
