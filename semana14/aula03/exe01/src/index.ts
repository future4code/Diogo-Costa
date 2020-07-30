//! Exercício 2, resposta b. mudar fuso horário usando
//! utcOffset("+0200") sendo o +0200 equivalente a Londres
//import * as moment from "moment";
import moment, { duration } from "moment";

moment.locale("pt-br");

type event = {
	name: string;
	startAt: moment.Moment;
	finishAt: moment.Moment;
	description: string;
};

/* const newName: string = process.argv[2];
const newStart: moment.Moment = process.argv[3];
const newFinish: moment.Moment = process.argv[4];
const newDescription: string = process.argv[5]; */

const allEvents: event[] = [
	{
		name: "Avó",
		startAt: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
		finishAt: moment("25/06/2020 15:30", "DD/MM/YYYY HH:mm"),
		description: "Levar avó no muay thay",
	},
	{
		name: "Namorada",
		startAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
		finishAt: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm"),
		description: "Comprar doces pra acalmar a TPM",
	},
];

const showEvents = (event: event[]): void => {
	event.map((item: event) => {
		const duration = item.finishAt.diff(item.startAt, "minutes");

		const today = moment();
		const daysUntil = item.startAt.diff(today, "days");

		console.log(`
        Nome: ${item.name}.
        Horário de início: ${item.startAt.format(
			"dddd, DD [de] MMMM [de] YYYY, HH:mm"
		)}.
            Horário de fim: ${item.finishAt.format(
				"dddd, DD [de] MMMM [de] YYYY, HH:mm"
			)}.
                Descrição: ${item.description}.
                Duração: ${duration} minutos.
                Dias até o evento: ${daysUntil}.
        `);
	});
};

showEvents(allEvents);

const newEvent = (
	name: string,
	startAt: moment.Moment,
	finishAt: moment.Moment,
	description: string
): void => {
	allEvents.push({
		name,
		description,
		startAt,
		finishAt,
	});
};

newEvent(
	"Estudar",
	(31/08/2020 8:00),
	"31/08/2020 8:30",
	"Estudar qualquer coisa"
);
