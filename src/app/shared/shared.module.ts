import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconsModule } from "../core/icons/icons.module";
import { Footer } from "./footer/footer.component";
import { Header } from "./header/header.component";

@NgModule({
  declarations: [Header, Footer],
  imports: [CommonModule, IconsModule],
  exports: [CommonModule, Header, Footer, IconsModule]
})

export class SharedModule { }
