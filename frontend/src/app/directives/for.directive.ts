import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {  //implements OnInit, vai chamar a diretiva sempre que houver mudança

  @Input('myForIn') numbers: number[] = []
  //myForEm, vai pegar o que vem depois da palavra 'in', no caso [1,2,3]

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit: number }
      )
    }
  }
}
