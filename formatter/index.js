function format(string = "", ...args) {
    var formatted = string;

    formatted.split("{}").forEach((_, idx) => {
        formatted = formatted.replace("{}", args[idx] || "");
    });

    return formatted;
}

String.prototype.format = function (...args) {
    return format(this.toString(), ...args);
};

module.exports = format;
