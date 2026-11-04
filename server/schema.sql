CREATE TABLE "User" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "createdAt" TIMESTAMP DEFAULT NOW(),
    "updatedAt" TIMESTAMP DEFAULT NOW()
);

CREATE TYPE "TaskStatus" AS ENUM ('TODO', 'DOING', 'DONE');

CREATE TABLE "Task" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "estimateMinutes" INTEGER,
    "taskLink" VARCHAR(255),
    "status" "TaskStatus" DEFAULT 'TODO',
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP DEFAULT NOW(),
    "updatedAt" TIMESTAMP DEFAULT NOW(),

    FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE
);

CREATE TABLE "TaskStep" (
    "id" SERIAL PRIMARY KEY, 
    "taskId" INTEGER NOT NULL,
    "stepNumber" INTEGER NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "completed" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP DEFAULT NOW(),
    "updatedAt" TIMESTAMP DEFAULT NOW(),

    -- CONSTRAINTS ARE WRITE AT THE END OF THE TABLE DEFINITIION
    FOREIGN KEY ("taskId") REFERENCES "Task"(id)  ON DELETE CASCADE,
    UNIQUE ("taskId", "stepNumber") -- we should not have same step number twice in the same task
);