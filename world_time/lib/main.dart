import 'package:flutter/material.dart';
import 'package:world_time/pages/home_page.dart';
import 'package:world_time/pages/location_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(title: 'World Time', initialRoute: '/', routes: {
      '/': (context) => HomePage(),
      '/location': (context) => LocationPage()
    });
  }
}
