import { App, Directive, UnwrapRef, WritableComputedRef } from "vue";
import type { Component } from "./component";

export type ComponentType = typeof Component;

export const GetTextSymbol = Symbol("GETTEXT");

export interface GetTextOptions {
  availableLanguages: { [key: string]: string };
  defaultLanguage: string;
  mutedLanguages: Array<string>;
  silent: boolean;
  translations: { [key: string]: { [key: string]: any } };
  setGlobalProperties: boolean;
  provideDirective: boolean;
  provideComponent: boolean;
}

export type Language = UnwrapRef<{
  available: GetTextOptions["availableLanguages"];
  muted: GetTextOptions["mutedLanguages"];
  silent: GetTextOptions["silent"];
  translations: WritableComputedRef<WritableComputedRef<GetTextOptions["translations"]>>;
  current: string;
  $gettext: (msgid: string) => string;
  $pgettext: (context: string, msgid: string) => string;
  $ngettext: (msgid: string, plural: string, n: number) => string;
  $npgettext: (context: string, msgid: string, plural: string, n: number) => string;
  interpolate: (msgid: string, context: object, disableHtmlEscaping?: boolean) => string;
  install: (app: App) => void;
  directive: Directive;
  component: ComponentType;
}>;
