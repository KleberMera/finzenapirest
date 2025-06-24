// dto/filter-notifications.dto.ts
import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterNotificationsDto {
  @Type(() => Number)
  @IsInt()
  userId: number;

  @IsOptional()
  @IsEnum(['all', 'read', 'unread'])
  readStatus?: 'all' | 'read' | 'unread';

  @IsOptional()
  @IsEnum(['all', 'debt', 'transaction'])
  type?: 'all' | 'debt' | 'transaction';
}
