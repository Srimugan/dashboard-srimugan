import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnlyWithDecimal]'
})
export class NumbersOnlyWithDecimalDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = this.el.nativeElement.value;
    const allowedKeys = [
      'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'
    ];

    // Allow navigation keys and specific control keys
    if (allowedKeys.includes(event.key)) {
      return;
    }

    // Allow numbers (0-9)
    if (event.key >= '0' && event.key <= '9') {
      return;
    }

    // Allow a single decimal point
    if (event.key === '.' && !input.includes('.')) {
      return;
    }

    // Prevent all other characters
    event.preventDefault();
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedInput = event.clipboardData?.getData('text/plain');
    if (pastedInput) {
      // Remove any characters that are not numbers or a single dot
      const cleanedInput = pastedInput.replace(/[^0-9.]/g, '');
      const parts = cleanedInput.split('.');
      let finalInput = parts[0];
      if (parts.length > 1) {
        finalInput += '.' + parts.slice(1).join(''); // Ensure only one dot
      }
      document.execCommand('insertText', false, finalInput);
    }
  }
}