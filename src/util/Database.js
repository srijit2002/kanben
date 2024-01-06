class Database {
  static prefix = "project_manager";
  static save(key, value) {
    localStorage.setItem(`${this.prefix}-${key}`, JSON.stringify(value));
  }
  static load(key) {
    let item = localStorage.getItem(`${this.prefix}-${key}`);
    return item ? JSON.parse(item) : null;
  }
  static clear() {
    localStorage.clear();
  }
  static append(key, value) {
    let oldValue = Database.load(key) || [];
    let newVal = [value, ...oldValue];
    this.save(key, newVal);
  }
}

export default Database;
