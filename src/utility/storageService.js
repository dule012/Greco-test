class StorageService {
  static set(propName, value) {
    localStorage.setItem(propName, value);
  }
  static get(name) {
    return localStorage.getItem(name);
  }
}

export default StorageService;
