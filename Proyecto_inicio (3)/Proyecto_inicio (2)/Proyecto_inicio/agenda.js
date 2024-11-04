document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'es', // Cambiar el idioma a español
        initialView: 'timeGridWeek', // Vista semanal con horas
        slotMinTime: '08:00:00', // Hora de inicio del día
        slotMaxTime: '18:00:00', // Hora de fin del día
        allDaySlot: false, // Oculta la sección de "todo el día"
        selectable: true,
        editable: true,
        eventMaxHeight: 100, // Establece una altura máxima para cada evento
        expandRows: true, // Ajusta las filas a toda la altura disponible
        headerToolbar: {
            start: 'title', // Título del calendario
            center: '',
            end: 'today prev,next' // Botones de navegación
        },
        events: [
            {
                title: 'Cita con Matías Pérez',
                start: '2024-11-01T10:00:00',
                end: '2024-11-01T11:00:00',
                className: 'fc-event-occupied' // Clase para citas ocupadas
            },
            {
                title: 'Cita con Camila Gómez',
                start: '2024-11-02T15:00:00',
                end: '2024-11-02T16:00:00',
                className: 'fc-event-occupied'
            },
            // Puedes agregar más citas aquí
        ],
        select: function(info) {
            let title = prompt("Ingrese el nombre del paciente para la nueva cita:");
            if (title) {
                calendar.addEvent({
                    title: 'Disponible para ' + title,
                    start: info.startStr,
                    end: info.endStr,
                    className: 'fc-event-available' // Clase para citas disponibles
                });
            }
            calendar.unselect();
        },
        eventClick: function(info) {
            if (confirm("¿Desea eliminar esta cita?")) {
                info.event.remove(); // Elimina la cita si se confirma
            }
        }
    });

    calendar.render();
});