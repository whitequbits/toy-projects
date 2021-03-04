import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<HomePage> {
  Map data = {'location': ' Unknown', 'time': 'Loading...'};

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.blue,
        body: SafeArea(
            child: Center(
                child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(data['location'],
                style: TextStyle(
                    fontSize: 48.0,
                    fontWeight: FontWeight.w500, // Set font weight
                    color: Colors.white,
                    fontFamily: "Roboto" // Set text color
                    )),
            Text(data['time'],
                style: TextStyle(
                    fontSize: 48.0,
                    fontWeight: FontWeight.w500, // Set font weight
                    color: Colors.white,
                    fontFamily: "Roboto" // Set text color
                    )),
            FlatButton(
              onPressed: () async {
                dynamic result =
                    await Navigator.pushNamed(context, '/location');
                setState(() {
                  data = {
                    'time': result['time'],
                    'location': result['location'],
                  };
                });
              },
              child: Text(
                'Edit Location',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
            )
          ],
        ))));
  }
}
