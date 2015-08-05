var getMeetupData = function() {
    var meetupURL = "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=nerdlab-yyc&only=name%2Cevent_url%2Cvenue.name%2Cdescription%2Ctime%2Cutc_offset&photo-host=public&page=1&fields=&order=time&desc=false&status=upcoming&sig_id=58437552&sig=ce25f734bda4b5ebd107e1b132bc331b49e57792&callback=?",
        eventDate = $('#event-date'),
        eventLocation = $('#event-location'),
        eventTitle = $('#event-title'),
        eventDescription = $('#event-description'),
        eventRSVP = $('#event-rsvp');


    $.getJSON(meetupURL, function(data) {
        if (!$.isEmptyObject(data.results)) {

            var d = new Date(data.results[0].time + data.results[0].utc_offset);
            console.log(data.results[0].utc_offset);
            var eventDescriptionFull = data.results[0].description;
            var eventDescriptionSnippet = eventDescriptionFull.split('</p>');

            eventDate.text(getDateFormat(d));
            eventLocation.text(data.results[0].venue.name);
            eventTitle.text(data.results[0].name);
            eventDescription.html(eventDescriptionSnippet[0]);
            eventRSVP.attr("href", data.results[0].event_url);
            eventRSVP.text('RSVP on Meetup');
        }
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
    if (hour > 12) {
        return 'pm';
    } else if (hour < 12) {
        return 'am';
    } else if (hour === 12) {
        return 'noon';
    } else if (hour === 0) {
        return 'midnight';
    }
};

$( document ).ready(function() {
    getMeetupData();
});