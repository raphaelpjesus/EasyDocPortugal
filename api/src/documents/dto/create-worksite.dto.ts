export class CreateWorksiteDto {
  name!: string;
  location?: string;

  startsAt?: Date;
  endsAt?: Date;

  isActive?: boolean;
}
