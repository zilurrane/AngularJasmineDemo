import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocationInfo(latitude: Number, longitude: Number) {
    // return this.http.get(`${environment.geoInfoAPI}/${latitude},${longitude}`);
    return of({"city":"Pune City","cityCode":"","community":"Anandnagar (Pune)","country":"IN","county":"Pune","countyCode":"521","latitude":18.6032,"longitude":73.7626,"nearby":[{"city":"Pune City","cityCode":"","community":"Karvenagar","country":"IN","county":"Pune","countyCode":"521","latitude":18.6032,"longitude":73.7626,"postalCode":"411052","state":"Maharashtra","stateCode":"16"},{"city":"Pune City","cityCode":"","community":"Navsahyadri","country":"IN","county":"Pune","countyCode":"521","latitude":18.6032,"longitude":73.7626,"postalCode":"411052","state":"Maharashtra","stateCode":"16"},{"city":"Haveli","cityCode":"","community":"Infotech  Park (Hinjawadi)","country":"IN","county":"Pune","countyCode":"521","latitude":18.6032,"longitude":73.7626,"postalCode":"411057","state":"Maharashtra","stateCode":"16"},{"city":"Haveli","cityCode":"","community":"Maan SO","country":"IN","county":"Pune","countyCode":"521","latitude":18.6032,"longitude":73.7626,"postalCode":"411057","state":"Maharashtra","stateCode":"16"},{"city":"Mulashi","cityCode":"","community":"Marunji","country":"IN","county":"Pune","countyCode":"521","latitude":18.6032,"longitude":73.7626,"postalCode":"411057","state":"Maharashtra","stateCode":"16"},{"city":"Pune City","cityCode":"","community":"Wakad","country":"IN","county":"Pune","countyCode":"521","latitude":18.6032,"longitude":73.7626,"postalCode":"411057","state":"Maharashtra","stateCode":"16"},{"city":"Pune City","cityCode":"","community":"Warje","country":"IN","county":"Pune","countyCode":"521","latitude":18.6032,"longitude":73.7626,"postalCode":"411058","state":"Maharashtra","stateCode":"16"},{"city":"Haveli","cityCode":"","community":"Baner","country":"IN","county":"Pune","countyCode":"521","latitude":18.5586,"longitude":73.7794,"postalCode":"411045","state":"Maharashtra","stateCode":"16"},{"city":"Pune City","cityCode":"","community":"N.I.A.","country":"IN","county":"Pune","countyCode":"521","latitude":18.5586,"longitude":73.7794,"postalCode":"411045","state":"Maharashtra","stateCode":"16"},{"city":"Haveli","cityCode":"","community":"Pimple Gurav","country":"IN","county":"Pune","countyCode":"521","latitude":18.5893,"longitude":73.8128,"postalCode":"411061","state":"Maharashtra","stateCode":"16"}],"postalCode":"411051","state":"Maharashtra","stateCode":"16"});
  }

}
