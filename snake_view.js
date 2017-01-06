var view = {
  init: function(gridSize) {
    this.gridSize = gridSize;
  },

  setGameBoard: function() {
    this.setRows();
    this.setColumns();
  },

  setRows: function() {
    var i = this.gridSize;
    while (i--) {
      var rowDiv = this.createDiv("row");
      $(".gameboard").append(rowDiv.attr("id", i));
    };
  },

  setColumns: function() {
    var self = this
    $(".row").each(function(index, element) {
      var i = self.gridSize;
      while (i--) {
        var columnDiv = self.createDiv("square");
        $(element).append(columnDiv.attr("id", i));
      };
    });
  },

  createDiv: function(className) {
    var $div = $("<div>");
    $div.addClass(className);
    return $div;
  }


};
