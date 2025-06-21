"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const colors = [
  { id: 'primary', name: 'きいろ', class: 'bg-primary' },
  { id: 'accent', name: 'ももいろ', class: 'bg-accent' },
  { id: 'blue', name: 'みずいろ', class: 'bg-blue-500' },
  { id: 'green', name: 'みどり', class: 'bg-green-500' },
];

export function CustomizationDrawer({ being, onSave, trigger }) {
  const [name, setName] = useState(being.name);
  const [personality, setPersonality] = useState(being.personality);
  const [color, setColor] = useState(being.color);
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    onSave(name, personality, color);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>カスタマイズ</SheetTitle>
          <SheetDescription>
            おともだちの見た目や性格を変えられます。
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              なまえ
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="personality" className="text-right pt-2">
              せいかく
            </Label>
            <Textarea
              id="personality"
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              className="col-span-3"
              rows={4}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              いろ
            </Label>
            <div className="col-span-3 flex gap-2">
                {colors.map((c) => (
                    <button
                        key={c.id}
                        type="button"
                        onClick={() => setColor(c.id)}
                        className={cn(
                            "h-8 w-8 rounded-full border-2 transition-all",
                            c.class,
                            color === c.id ? 'border-ring' : 'border-transparent'
                        )}
                        aria-label={`Set color to ${c.name}`}
                    />
                ))}
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">キャンセル</Button>
          </SheetClose>
          <Button onClick={handleSave}>変更を保存</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
