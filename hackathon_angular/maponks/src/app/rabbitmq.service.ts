import { Injectable } from '@angular/core';
import { Connection, Exchange } from 'amqp-ts';
import { BehaviorSubject, concatMap, of, takeWhile, timer } from 'rxjs';
import { Track } from './track';

@Injectable({
  providedIn: 'root'
})
export class RabbitmqService {
  // private connection: Connection;
  // private exchange: Exchange;

  private track$: BehaviorSubject<Track | null> = new BehaviorSubject<Track | null>(null);

  get track() {
    return this.track$.asObservable();
  }

  constructor() {
    timer(0, 2000)
      .pipe(takeWhile(val => val < ships.tracking.length), concatMap(val => of(ships.tracking[val])))
      .subscribe(val => this.track$.next(val))

    // this.connection = new Connection('amqp://localhost');
    // this.exchange = this.connection.declareExchange('my-exchange', 'fanout', { durable: false });

    // const queue = this.connection.declareQueue('', { exclusive: true });
    // queue.bind(this.exchange);

    // queue.activateConsumer((message) => {
    //   console.log('Received message:', message.getContent());

    //   this.track$.next(message.getContent());
    // });
  }

  // Add any additional methods or properties here
}
const ships = {
  "tracking": [
      {
          "tstamp": 1682679600,
          "seascape": [
              {
                  "cog": "111.2",
                  "imo": null,
                  "lat": "-23.925005",
                  "lon": "-46.330395",
                  "nav": null,
                  "sog": "0",
                  "head": "111",
                  "mmsi": 9128531,
                  "tstamp": 1682679829,
                  "vessel_name": "TROIA",
                  "vesseltype_icon": 6
              },
              {
                  "cog": "250.1",
                  "imo": null,
                  "lat": "-23.920125",
                  "lon": "-45.891061666666666",
                  "nav": null,
                  "sog": "5.4",
                  "head": "250",
                  "mmsi": 9128534,
                  "tstamp": 1682679841,
                  "vessel_name": "MADARA",
                  "vesseltype_icon": 2
              }
          ]
      },
      {
          "tstamp": 1682679900,
          "seascape": [
              {
                  "cog": "133.2",
                  "imo": null,
                  "lat": "-23.995045",
                  "lon": "-46.30034333333333",
                  "nav": null,
                  "sog": "0",
                  "head": "133",
                  "mmsi": 9128531,
                  "tstamp": 1682680189,
                  "vessel_name": "TROIA",
                  "vesseltype_icon": 6
              },
              {
                  "cog": "239.2",
                  "imo": null,
                  "lat": "-23.920818333333333",
                  "lon": "-45.89253166666666",
                  "nav": null,
                  "sog": "5.3",
                  "head": "239",
                  "mmsi": 9128534,
                  "tstamp": 1682679901,
                  "vessel_name": "MADARA",
                  "vesseltype_icon": 2
              }
          ]
      }
  ]
};
