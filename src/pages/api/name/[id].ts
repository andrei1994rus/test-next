import type {NextApiRequest, NextApiResponse} from 'next';

const getName: any = async (id: number) => {
	let name;

	try {
		name = await fetch(`https://test-redis.cyclic.app/person/lindex/${id}`);
	} catch (e) {
		console.log(e);
		return e;
	}

	return name.json();
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log(req.query);
	let id: any = req.query.id!;

	if (/\D/.test(id)) {
		console.log('not number!');
		return res.status(400).send('BAD REQUEST!');
	}

	const name = getName(id);

	setTimeout(
		() =>
			name.then((result: any) => {
				if (result.name == 'null') {
					console.log('not found!');
					return res.status(404).send('404 NOT FOUND!');
				}

				res.status(200).json(result);
			}),
		500,
	);
}
