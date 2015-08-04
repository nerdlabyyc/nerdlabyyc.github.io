var getMeetupData = function() {
    var meetupURL = "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=nerdlab-yyc&only=name%2Cevent_url%2Cvenue.name%2Cdescription%2Ctime%2Cutc_offset&photo-host=public&page=1&fields=&order=time&desc=false&status=upcoming&sig_id=58437552&sig=ce25f734bda4b5ebd107e1b132bc331b49e57792&callback=?",
        eventDate = $('#event-date'),
        eventLocation = $('#event-location'),
        eventTitle = $('#event-title'),
        eventDescription = $('#event-description'),
        eventRSVP = $('#event-rsvp');


    $.getJSON(meetupURL, function(data) {
        if (!$.isEmptyObject(data.results)) {

            var d = new Date(data.results[0].time);
            console.log(d);
            var eventDescriptionFull = data.results[0].description;
            var eventDescriptionSnippet = eventDescriptionFull.split('</p>');

            eventDate.text(data.results[0].utc_offset);
            eventLocation.text(data.results[0].venue.name);
            eventTitle.text(data.results[0].name);
            eventDescription.html(eventDescriptionSnippet[0]);
            eventRSVP.attr("href", data.results[0].event_url);
            eventRSVP.text('RSVP on Meetup');
        }
    });

};




$( document ).ready(function() {
    getMeetupData();
});