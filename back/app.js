const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
const morgan = require('morgan');
const Scrap = require('./Scrap')

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(morgan('dev'));

app.post('/scrap-reunion-pmu-links', (req, res) => {
    (
        async () => {
            let inputLink = `https://www.zeturf.fr/fr/resultats-et-rapports/${req.body.payload}/turf`;
            myScrap = new Scrap();
            dataReunionsLinks = null;
            dataCoursesLinks = null;

            const arrayReunionsLinks = Promise.resolve(myScrap.getLinks(inputLink));
            arrayReunionsLinks.then((data) => {
                if (data === 'error') { res.status(500).json({ 'status': 'url invalid' }) }
                else if (data.length === 0) {
                    res.status(500).json({ 'status': 'url or date invalid' })
                } else {
                    arrayReunionsLinks.then((array) => {
                        let courses = Promise.resolve(myScrap.getLinksCourses(array));
                        courses.then((array) => {
                            res.status(200).json({
                                'status': 'succes',
                                'results': array
                            })
                        })
                    });
                }
            })
        }
    )()
})

app.post('/scrap-course-pmu-links', (req, res) => {

    (
        async () => {
            let link = req.body.payload;
            myScrap = new Scrap();
            const arrayInfosCourse = Promise.resolve(myScrap.getInfosCourse(link));
            arrayInfosCourse.then((data) => {
                res.status(200).json({
                    'status':'success',
                    'results': data
                })
            })
        }
    )()
})

app.listen(PORT, () => {
    console.log(`this server listening on port ${PORT}`);
})