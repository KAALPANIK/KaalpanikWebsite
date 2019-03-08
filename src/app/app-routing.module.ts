import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileApplicationComponent} from './component/mobile-application/mobile-application.component';
import { UXUIDesignComponent } from './component/uxuidesign/uxuidesign.component';
import { SoftwareConsultingComponent } from './component/software-consulting/software-consulting.component';
import { InternetOfThingsComponent } from './component/internet-of-things/internet-of-things.component';
import { InternetMarketingComponent } from './component/internet-marketing/internet-marketing.component';
import { AnalyticsBigDataComponent } from './component/analytics-big-data/analytics-big-data.component';
import { BlockChainServicesComponent } from './component/block-chain-services/block-chain-services.component';
import { CloudComputingComponent } from './component/cloud-computing/cloud-computing.component';
import { WebDevelopmentComponent } from './component/web-development/web-development.component';
import {ShowComponent} from './component/show/show.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  {path: 'MobileApp', component: MobileApplicationComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Analytic-BigData', component: AnalyticsBigDataComponent},
  {path: 'Block-Chain', component: BlockChainServicesComponent},
  {path: 'Cloud-Computing', component: CloudComputingComponent},
  {path: 'Internet-Marketing', component: InternetMarketingComponent},
  {path: 'Internet-of-Things', component: InternetOfThingsComponent},
  {path: 'Software-Consulting', component: SoftwareConsultingComponent},
  {path: 'Web-Development', component: WebDevelopmentComponent},
  {path: 'UIUX', component: UXUIDesignComponent},
  {path: 'show', component: ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MobileApplicationComponent, AboutComponent,
  AnalyticsBigDataComponent, BlockChainServicesComponent, CloudComputingComponent, InternetMarketingComponent, 
  InternetOfThingsComponent, SoftwareConsultingComponent, WebDevelopmentComponent, UXUIDesignComponent]
