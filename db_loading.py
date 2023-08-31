import pymysql, subprocess, time
start_pos = time.time()
while True:
    try:
        pymysql.connect(
            host="mysql_kino_db", 
            port=3306,
            user="root",
            password="root",
            database="kinodb")
        print("Connection has been successfully estabilished")
        break
    except Exception as ex:
        if (time.time() - start_pos) > 60 * 5:
            print("Unable to connect MySQL Database")
            break


