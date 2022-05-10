# Welcome to the project-in-3hour wiki! Projects

## Feature ค้นหาหลักสูตรโดยใช้ชื่อคณะปริญญาเอก

### Planning ระยะเวลามี 3 ชั่วโมง
1. 20 นาทีแรกใช้ในการเลือกฟีเจอร์ ดูว่าต้องทำอะไรบ้าง แตก task อย่างไร (อธิบายอีกทีในหัวข้อ Task Extract)
2. 30 นาทีต่อมา ดีไซน์แบบง่ายๆและพัฒนา frontend ง่ายๆ ขึ่นมา
3. 30 นาทีต่อมา ดีไซน์แบบง่ายๆและทำการพัฒนา backend 
4. 60 นาทีเชื่อมต่อระบบระหว่าง frontend backend และ Dockerfile
5. 20 นาทีสุดท้ายอาจทำ Observibility

### Tasks Extract
1. Planning (What and How todo?)
2. Design Frontend 
3. Design Backend
4. Develop Frontend with React
5. Develop Backend with Express 
6. Testing Backend (ยูนิต, อินทริเกรต)
7. Testing Frontend (คอมโพแนน, E2E)
8. Write Dockerfile
9. Observibility (ทำ Zipkins และ Prometheus )

### User flow
1. user เข้าหน้าเว็บ
2. user จะเห็นช่องค้นหา ทำการคลิกที่ช่อง
3. user จะเห็นดรอปดาวลงมา กดเลือกคณะ
4. user จะเห็น ข้อมูลคณะที่เลือกด้านล่างแถบค้นหา

### UI flow 

### Aceptence Test

| Case no. | Case name                     | Case description                                                | Input                                       | Expect Result                                         | Test Result |
|----------|-------------------------------|-----------------------------------------------------------------|---------------------------------------------|-------------------------------------------------------|-------------|
| 1        | ผู้ใช้เลือกข้อมูลจากdropdownที่ช่องเสิช | ผู้ใช้ทำการเลือกชื่อคณะจาก dropdown แล้วเห็นข้อมูลการเข้าสมัครที่ด้านล่างช่องเสิช | { faculty : "IT" }                          | {   faculty : "IT",   register_date : "12/12/2022"  } |             |
| 2        | ผู้ใช้กดดูรายละเอียดสมัครงาน        | กดดูรายละเอียดต่างๆในผลลัพธ์                                         | เป็นการคลิกดูจึงไม่มี input ที่เป็นดาต้าแต่มีเป็น กายภาพ | {   description : "dwdwdw" }                          |             |

### Management Tools
https://www.notion.so/takai-docs/b99d3613c80b4eeb87040dc83c3f6cd1?v=0bdd4da2c99a4d48a4aba06f3351357e

# Step to run
ถ้าจะรันจากตัว docker-compose-build.yml
```docker-compose -f docker-compose-build.yml up```
ตัว service backend อยู่ port 5000 ลิงค์ localhost:5000/api/falcuties เพื่อดูว่ามี response ออกมารึป่าว
เข้า ดูที่ port 9400 ดู metric ลิงค์ localhost:9400/metrics
เข้าดูที่ port 9090 ดู โพรมีธีอุส ลิงค์ localhost:9090 ไปดู ตรง target ได้ครับว่า up มั้ย
