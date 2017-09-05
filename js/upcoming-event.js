var getMeetupData = function() {
    var meetupURL = "https://api.meetup.com/nerdlab-yyc/events?photo-host=public&page=20&sig_id=58437552&sig=a448fc3ec2e081bc8df6c556636672517b94fe6d&callback=?",
        eventDate = $('#event-date'),
        eventLocation = $('#event-location'),
        eventTitle = $('#event-title'),
        eventDescription = $('#event-description'),
        eventRSVP = $('#event-rsvp'),
        eventNo = $('#no-events'),
        eventYes = $('#yes-events'),
        eventLoading = $('#loading-events');


    $.getJSON(meetupURL, function(data) {

        console.log(data.data);
        // if (!$.isEmptyObject(data.results)) {

        //     var d = new Date(data.results[0].time + data.results[0].utc_offset);
        //     var eventDescriptionFull = data.results[0].description;
        //     var eventDescriptionSnippet = eventDescriptionFull.split('</p>');

        //     eventDate.text(getDateFormat(d));
        //     if (data.results.hasOwnProperty('venue')) {
        //         eventLocation.text(data.results[0].venue.name);
        //     } else {
        //         $('#event-location').addClass('hidden');
        //         $('#event-date').removeClass('event-date');
        //     }
            
        //     eventTitle.text(data.results[0].name);
        //     eventDescription.html(eventDescriptionSnippet[0]);
        //     eventRSVP.attr("href", data.results[0].event_url);
        //     eventLoading.toggleClass('hidden');
        //     eventYes.toggleClass('hidden');
        // } else {
        //     eventLoading.toggleClass('hidden');
        //     eventNo.toggleClass('hidden');
        // }
    });

};


var getDateFormat = function(time) {

    var newTime = '';
    var month = time.getUTCMonth();
    var day = time.getUTCDay();
    var date = time.getUTCDate();
    var hour = time.getUTCHours();
    var minute = time.getUTCMinutes();
    var periodOfDay;




    newTime = getMonthFormat(month) + ' ' + date + ', ' + getHourFormat(hour) + ':' + getMinuteFormat(minute) + getPeriodOfDay(hour);
    time.getMonth();
    return newTime;
};

var getMonthFormat = function(month) {
    switch (month) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
    }
};

var getMinuteFormat = function(minute) {
    if (minute < 10) {
        return '0' + minute;
    } else {
        return minute;
    }
};

var getHourFormat = function(hour) {
    if (hour > 12) {
        return hour - 12;
    } else {
        return hour;
    }
};

var getPeriodOfDay = function(hour) {
    if (hour >= 12) {
        return 'pm';
    } else {
        return 'am';
    }
};

$( document ).ready(function() {
    getMeetupData();
});