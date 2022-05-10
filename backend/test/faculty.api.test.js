const facultyModel = require('../model/model')
const { connect, closeDatabase, clearDatabase } = require('./mongoMockup')

beforeAll(async() => await connect())

afterEach(async() => await clearDatabase())

afterAll(async() => await closeDatabase())

describe('Fecth faculties testing', () => {
    test('test mock response data', async() => {
        await facultyModel.create({
            faculty_name : "สถาปัตยกรรม ศิลปะและการออกแบบ",
            faculty_course : "การออกแบบสภาพแวดล้อม",
            start_date : "12/12/2020",
            due_date : "10/12/2020",
            person_info : "เป็นผู้สำเร็จการศึกษาระดับปริญญาโท"
        })
        const result = await facultyModel.find({ faculty_name : "สถาปัตยกรรม ศิลปะและการออกแบบ" })
        expect(result[0].faculty_name).toEqual("สถาปัตยกรรม ศิลปะและการออกแบบ")
        expect(result[0].faculty_course).toEqual("การออกแบบสภาพแวดล้อม")
        expect(result[0].start_date).toEqual("12/12/2020")
        expect(result[0].due_date).toEqual("10/12/2020")
        expect(result[0].person_info).toEqual("เป็นผู้สำเร็จการศึกษาระดับปริญญาโท")
    })
})