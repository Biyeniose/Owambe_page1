import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";

const Calendar = () => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const [currentDay, setCurrentDay] = useState(new Date());
  return (
    <View style={styles.calendar}>
      <Text style={styles.title_date}>
        {months[currentDay.getMonth()]} {currentDay.getFullYear()}
      </Text>

      <View style={styles.calendar_body}>
        <View style={styles.week_container}>
          {weekDays.map((weekday) => {
            return (
              <Text style={[styles.weekday, styles.calendarDay]} key={weekday}>
                {weekday}
              </Text>
            );
          })}
        </View>
        <CalendarDays day={currentDay} changeDay={setCurrentDay} />
      </View>
    </View>
  );
};

const CalendarDays = (props) => {
  let firstDayOfMonth = new Date(
    props.day.getFullYear(),
    props.day.getMonth(),
    1
  );
  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }
    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === props.day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  const groupedDays = [];
  for (let i = 0; i < currentDays.length; i += 7) {
    groupedDays.push(currentDays.slice(i, i + 7));
  }

  return (
    <View style={styles.calendar_days}>
      {groupedDays.map((week, index) => (
        <View style={styles.week_container} key={index}>
          {week.map((day, index) => (
            <View
              key={index}
              style={[
                styles.calendarDay,
                props.day.toDateString() === day.date.toDateString()
                  ? styles.current
                  : {},
                day.selected ? styles.selected : {},
              ]}
              onPress={() =>
                props.changeDay(new Date(day.year, day.month, day.number))
              }
            >
              {day.currentMonth ? (
                <Text style={styles.day}>{day.number}</Text>
              ) : (
                <View style={styles.emptyDay} />
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  calendar: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  calendar_body: {
    backgroundColor: "white",
    width: "90%",
    height: "80%",
    marginTop: 12,
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
  title_date: {
    marginTop: -5,
    color: "white",
  },
  weekday: {
    marginTop: 20,
    fontSize: 8.5,
    fontWeight: "500",
    textAlign: "center",
  },
  calendar_days: {
    width: "100%",
  },
  week_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    marginBottom: 18,
    // backgroundColor: "green",
  },
  calendarDay: {
    width: 15,
    flex: 1,
  },
  day: {
    fontSize: 12,
    textAlign: "center",
  },
  current: {
    backgroundColor: "red",
    borderRadius: 20,
    padding: 10,
    flex: 1,
  },
});
