import 'package:flutter/material.dart';
import 'package:world_time/services/world_time_service.dart';

class LocationPage extends StatefulWidget {
  @override
  _LocationState createState() => _LocationState();
}

class _LocationState extends State<LocationPage> {
  Map data = {};

  List<WorldTimeService> locations = [
    WorldTimeService(url: 'Europe/London', location: 'London'),
    WorldTimeService(url: 'Europe/Berlin', location: 'Athens'),
    WorldTimeService(url: 'Africa/Cairo', location: 'Cairo'),
    WorldTimeService(url: 'Africa/Nairobi', location: 'Nairobi'),
    WorldTimeService(url: 'America/Chicago', location: 'Chicago'),
    WorldTimeService(url: 'America/New_York', location: 'New York'),
    WorldTimeService(url: 'Asia/Seoul', location: 'Seoul'),
    WorldTimeService(url: 'Asia/Jakarta', location: 'Jakarta'),
  ];

  void updateTime(index) async {
    WorldTimeService instance = locations[index];
    await instance.getTime();
    // navigate to home screen
    Navigator.pop(
        context, {'location': instance.location, 'time': instance.time});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Location"),
        ),
        body: ListView.builder(
            itemCount: locations.length,
            itemBuilder: (context, index) {
              return Padding(
                padding: EdgeInsets.all(8.0),
                child: ListTile(
                    onTap: () {
                      updateTime(index);
                    },
                    title: Text(locations[index].location)),
              );
            }));
  }
}
