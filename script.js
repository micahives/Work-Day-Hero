// Code that interacts with DOM nested in jQuery call to ensure proper rendering
$(document).ready(function() {
  var today = dayjs();
  $("#currentDay").text(today.format('dddd, MMMM DD'));

  // Current hour in dayjs form
  var currentHour = dayjs().hour();
  console.log(`Current Hour: ${currentHour}`);

  const timeBlocks = [
    {
      id: "hour-9",
      hour: 9
    },
    {
      id: "hour-10",
      hour: 10
    },
    {
      id: "hour-11",
      hour: 11
    },
    {
      id: "hour-12",
      hour: 12
    },
    {
      id: "hour-13",
      hour: 13
    },
    {
      id: "hour-14",
      hour: 14
    },
    {
      id: "hour-15",
      hour: 15
    },
    {
      id: "hour-16",
      hour: 16
    },
    {
      id: "hour-17",
      hour: 17
    }];

  // Goes through each timeBlock object, adds class based on comparison with currentHour
  timeBlocks.forEach(function(currentObject) {
    // Selects an individual time block
    var individualBlock = $("#" + currentObject.id);
    console.log("ID:", currentObject.id, "Hour:", currentObject.hour);

    if (currentHour > currentObject.hour) {
      individualBlock.addClass("past");
    } else if (currentHour < currentObject.hour) {
      individualBlock.addClass("future");
    } else {
      individualBlock.addClass("present");
    }

    // Event listener on save button for each individual time block
    // gets the text value from the textarea for each block
    // gets the id  of the block to use as the storage object's key in local storage
    individualBlock.find('.saveBtn').on('click', function() {
      var textareaValue = individualBlock.find('textarea').val();
      var storageID = currentObject.id;
      localStorage.setItem(storageID, textareaValue);
    });

    // Retrieves local storage text (if present) and sets the textarea value to that of the local storage text
    var storedText = localStorage.getItem(currentObject.id);
    if (storedText) {
      individualBlock.find('textarea').val(storedText);
    }
  });
})