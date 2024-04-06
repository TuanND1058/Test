var ECC = {
  addMonths: function (date, months) {
    /// <signature>
    /// <summary>
    /// Add month
    /// </summary>
    /// <param name="date">Date</param> ex: yyyy-MM-dd
    /// <param name="months">number of month</param>
    /// </signature>

    var newDate = new Date(date);
    var day = newDate.getDate();
    newDate.setMonth(newDate.getMonth() + +months);
    if (newDate.getDate() != day) {
        newDate.setDate(0);
    }
    return newDate;
  },
  fillDateRangeWithMonthDuration: function (startDateId, endDateId, numberOfMonths) {
    /// <signature>
    /// <summary>
    /// Calculate distance by month and auto fill
    /// </summary>
    /// <param name="startDateId">id of input start date</param>
    /// <param name="endDateId">id of input end date</param>
    /// <param name="numberOfMonths">number of months</param>
    /// </signature>

    numberOfMonths = +numberOfMonths && +numberOfMonths > 1 ? Math.floor(numberOfMonths) : 1;

    /* This function works autofill for startDate and endDate */
    $('#' + startDateId).on('change', function () {
        var startDate = new Date(EJC.fnDateFormat($('#' + startDateId).val()));
        var endDate = new Date(EJC.fnDateFormat($('#' + endDateId).val()));

        if (isNaN(startDate)) {
            $('#' + startDateId).val('');
            return false;
        }

        if (isNaN(endDate) || startDate > endDate) {
            endDate = new Date(startDate);
        }
        else {
            //calculate the number of months between startDate and endDate
            var monthsApart = Math.abs((endDate.getFullYear() - startDate.getFullYear())
                * 12 + (endDate.getMonth() - startDate.getMonth()));

            if ((monthsApart == numberOfMonths && startDate.getDate() < endDate.getDate())
                || (monthsApart > numberOfMonths)) {
                endDate = EJC.addMonths(startDate, numberOfMonths);
            }
        }

        //regenerate date for startDate and endDate
        $('#' + startDateId).val(startDate.toISOString().substr(0, 10));
        $('#' + endDateId).val(endDate.toISOString().substr(0, 10));
    });

    /* This function works autofill for startDate and endDate */
    $('#' + endDateId).on('change', function () {
        var startDate = new Date(EJC.fnDateFormat($('#' + startDateId).val()));
        var endDate = new Date(EJC.fnDateFormat($('#' + endDateId).val()));

        if (isNaN(endDate)) {
            $('#' + endDateId).val('');
            return false;
        }

        if (isNaN(startDate) || startDate > endDate) {
            startDate = new Date(endDate);
        }
        else {
            //calculate the number of months between startDate and endDate
            var monthsApart = Math.abs((endDate.getFullYear() - startDate.getFullYear())
                * 12 + (endDate.getMonth() - startDate.getMonth()));

            if ((monthsApart == numberOfMonths && startDate.getDate() < endDate.getDate())
                || (monthsApart > numberOfMonths)) {
                startDate = EJC.addMonths(endDate, -numberOfMonths);
            }
        }

        //regenerate date for startDate and endDate
        $('#' + startDateId).val(startDate.toISOString().substr(0, 10));
        $('#' + endDateId).val(endDate.toISOString().substr(0, 10));
    });
  }

}