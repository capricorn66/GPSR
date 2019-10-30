// jQuery JavaScript Library v3.4.1
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import rwdMedia from './rwdMedia.js';
window.rwdMedia = rwdMedia;

// waves
import {wavesInit} from './waves.js';
window.wavesInit = wavesInit;

// vendor: moment v2.24.0,
import moment from 'moment';
window.moment = moment;

// vendor: daterangepicker v3.0.5,
import daterangepicker from 'daterangepicker';
window.daterangepicker = daterangepicker;


function tagglePass(elem) {
    const $this = $(elem);
    const thisType = $this.attr('type');

    if (thisType === 'password') {
        $this.attr('type', 'text');
        $this.next()
        $('.icon-eye-slash', $this.next()).removeClass('d-none');
        $('.icon-eye', $this.next()).addClass('d-none');
    }
    else if (thisType === 'text') {
        $this.attr('type', 'password');
        $('.icon-eye-slash', $this.next()).addClass('d-none');
        $('.icon-eye', $this.next()).removeClass('d-none');
    }
}


window.tagglePass = tagglePass;

$(document).ready( function() {

    wavesInit();

    moment.locale('pl');

    $('.date-picker').daterangepicker({
        timePicker: true,
        timePicker24Hour: true,
        autoUpdateInput: false,
        useSeconds: false,
        timePickerIncrement: 30,
        cancelClass: "btn-secondary",
        timePickerSeconds: false,
        locale: {
            format: 'HH:mm',
            cancelLabel: 'ANULUJ',
            applyLabel: 'ZAPISZ',
        }
    }, function(timeStart, timeEnd) {
        $('.date-picker').val(timeStart.format('HH:mm') + ' - ' + timeEnd.format('HH:mm'));
    }).on('show.daterangepicker', function (ev, picker) {
        picker.container.find(".calendar-table").hide();
        picker.container.addClass('timePicker');
    });

    $('.single-date-picker').daterangepicker({
        singleDatePicker: true,
        autoUpdateInput: false,
        startDate: '+1d',
        cancelClass: "btn-secondary",
        locale: {
            format: 'DD.MM.YYYY'
        }
    }, function(chosen) {
        $('.single-date-picker').val(chosen.format('DD.MM.YYYY'));
    }).data('daterangepicker');

});
