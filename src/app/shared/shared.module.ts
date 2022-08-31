import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Footer } from "./footer/footer.component";
import { Header } from "./header/header.component";

@NgModule({
  declarations: [Header, Footer],
  imports: [CommonModule],
  exports:[CommonModule, Header, Footer]
})

export class SharedModule {}
