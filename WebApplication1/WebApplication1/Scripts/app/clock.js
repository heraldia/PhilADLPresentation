function timerTick(dateStr) {
  var h, m, s;
  dateStr = dateStr.toString();
  Hours = Number(dateStr.slice(-6, -4));
  Minutes = Number(dateStr.slice(-4, -2));
  Seconds = Number(dateStr.slice(-2));

  if (Hours >= 18 || Hours <= 5) {
      document.getElementById('clock').style.fill = '#0055fa';
      document.getElementById('clock').style.stroke = '#df0';

  }

  h = 30 * ((Hours % 12) + Minutes / 60);
  m = 6 * Minutes;
  s = 6 * Seconds;

  document.getElementById('h_pointer').setAttribute('transform', 'rotate(' + h + ', 50, 50)');
  document.getElementById('m_pointer').setAttribute('transform', 'rotate(' + m + ', 50, 50)');
  document.getElementById('s_pointer').setAttribute('transform', 'rotate(' + s + ', 50, 50)');

}

function timerTickwid(id, dateStr) {
    var h, m, s;
    dateStr = dateStr.toString();
    Hours = Number(dateStr.slice(-6, -4));
    Minutes = Number(dateStr.slice(-4, -2));
    Seconds = Number(dateStr.slice(-2));
    if (Hours >= 18 || Hours <= 5) {
        document.getElementById(id).setAttribute('fill', '#0055fa');
        document.getElementById(id).setAttribute('stroke', '#df0');
    }

    h = 30 * ((Hours % 12) + Minutes / 60);
    m = 6 * Minutes;
    s = 6 * Seconds;

    document.getElementById('h_pointer_' + id).setAttribute('transform', 'rotate(' + h + ', 50, 50)');
    document.getElementById('m_pointer_' + id).setAttribute('transform', 'rotate(' + m + ', 50, 50)');
    document.getElementById('s_pointer_' + id).setAttribute('transform', 'rotate(' + s + ', 50, 50)');

}