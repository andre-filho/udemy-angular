import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input('appUnless') set unless(condition :boolean) {       // property with embbed setter
    if(!condition) {
      // creates a view in the view container and sends it to the template
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef :TemplateRef<any>, private vcRef :ViewContainerRef) { }

}
