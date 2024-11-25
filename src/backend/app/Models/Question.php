<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Question extends Model
{
    use HasFactory;

    /**
     * Get the user that owns the question.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The categories that belong to the question.
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_question', 'question_id', 'category_id');
    }

    /**
     * The likes that belong to the question.
     */
    public function likes(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'likes', 'question_id', 'user_id')->withTimestamps();
    }

    /**
     * Get the comments for the question.
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * Get the views for the question.
     */
    public function views(): HasMany
    {
        return $this->hasMany(View::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'title',
        'content',
        'is_resolved',
    ];

    protected $withCount = [
        'comments',
        'likes',
        'views',
    ];

    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => \Carbon\Carbon::parse($value)->format('Y年m月d日 H:i'),
        );
    }

    protected function updatedAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => \Carbon\Carbon::parse($value)->format('Y年m月d日 H:i'),
        );
    }
}
